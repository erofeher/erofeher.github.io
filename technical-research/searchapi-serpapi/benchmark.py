import csv
import json
import os
import time
from datetime import datetime, timezone
from pathlib import Path

import requests
from dotenv import load_dotenv

load_dotenv()
SEARCHAPI_KEY = os.getenv("SEARCHAPI_KEY")
SERPAPI_KEY = os.getenv("SERPAPI_KEY")

SEARCHAPI_URL = "https://www.searchapi.io/api/v1/search"
SERPAPI_URL = "https://serpapi.com/search"
RUNS_PER_QUERY = 5
REQUEST_TIMEOUT = 60
PAUSE_BETWEEN_REQUESTS = 2
OUTPUT_DIR = Path("data")
OUTPUT_FILE = OUTPUT_DIR / "benchmark_results.csv"

if not SEARCHAPI_KEY or not SERPAPI_KEY:
    raise RuntimeError("Add SEARCHAPI_KEY and SERPAPI_KEY to .env")

with open("queries.txt", encoding="utf-8") as f:
    QUERIES = [line.strip() for line in f if line.strip()]

OUTPUT_DIR.mkdir(exist_ok=True)

def extract_urls(data):
    return [r["link"] for r in data.get("organic_results", []) if r.get("link")]

def run_request(provider, query):
    if provider == "SearchApi":
        url = SEARCHAPI_URL
        params = {"engine":"google","q":query,"api_key":SEARCHAPI_KEY,"gl":"us","hl":"en"}
    else:
        url = SERPAPI_URL
        params = {"engine":"google","q":query,"api_key":SERPAPI_KEY,"gl":"us","hl":"en","no_cache":"true"}

    timestamp = datetime.now(timezone.utc).isoformat()
    start = time.perf_counter()
    try:
        response = requests.get(url, params=params, timeout=REQUEST_TIMEOUT)
        elapsed = (time.perf_counter()-start)*1000
        data = response.json() if response.status_code == 200 else {}
        organic_urls = extract_urls(data)
        error = "" if response.status_code == 200 else response.text[:300].replace("\n"," ")
        return timestamp, response.status_code, elapsed, len(response.content), organic_urls, error
    except requests.RequestException as exc:
        return timestamp, 0, (time.perf_counter()-start)*1000, 0, [], str(exc)

fields = ["timestamp_utc","query_number","run_number","request_order","provider","query",
          "status_code","response_time_ms","payload_size_bytes","organic_result_count","organic_urls","error"]

with open(OUTPUT_FILE, "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=fields)
    writer.writeheader()
    total=len(QUERIES)*RUNS_PER_QUERY*2; completed=0
    for qi, query in enumerate(QUERIES, 1):
        for run in range(1, RUNS_PER_QUERY+1):
            providers=["SearchApi","SerpApi"] if run%2 else ["SerpApi","SearchApi"]
            for order, provider in enumerate(providers,1):
                completed += 1
                ts,status,elapsed,size,organic_urls,error=run_request(provider,query)
                writer.writerow({
                    "timestamp_utc":ts,"query_number":qi,"run_number":run,"request_order":order,
                    "provider":provider,"query":query,"status_code":status,
                    "response_time_ms":round(elapsed,2),"payload_size_bytes":size,
                    "organic_result_count":len(organic_urls),
                    "organic_urls":json.dumps(organic_urls,ensure_ascii=False),"error":error
                })
                f.flush()
                print(f"[{completed}/{total}] {provider}: {elapsed:.0f} ms | HTTP {status}")
                time.sleep(PAUSE_BETWEEN_REQUESTS)
print(f"Raw data saved to {OUTPUT_FILE}")
