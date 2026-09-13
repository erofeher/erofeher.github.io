import json
import numpy as np
import pandas as pd

FILE = "data/benchmark_results.csv"
df = pd.read_csv(FILE)

def p95(x):
    return np.percentile(x, 95)

summary = df.groupby("provider").agg(
    requests=("provider","size"),
    successful=("status_code", lambda s: (s == 200).sum()),
    median_ms=("response_time_ms","median"),
    mean_ms=("response_time_ms","mean"),
    min_ms=("response_time_ms","min"),
    max_ms=("response_time_ms","max"),
    avg_results=("organic_result_count","mean"),
    avg_payload_bytes=("payload_size_bytes","mean"),
)
summary["p95_ms"] = df.groupby("provider")["response_time_ms"].apply(p95)
summary["success_rate_pct"] = summary["successful"] / summary["requests"] * 100

def parse_urls(value):
    try:
        return set(json.loads(value))
    except Exception:
        return set()

rows=[]
for (query, run), group in df.groupby(["query","run_number"]):
    if set(group["provider"]) != {"SearchApi","SerpApi"}:
        continue
    a=parse_urls(group[group.provider=="SearchApi"].iloc[0]["organic_urls"])
    b=parse_urls(group[group.provider=="SerpApi"].iloc[0]["organic_urls"])
    union=a|b
    rows.append({
        "query":query, "run":run, "common_urls":len(a&b),
        "jaccard_pct":(len(a&b)/len(union)*100) if union else np.nan
    })

overlap=pd.DataFrame(rows)
query_medians=df.pivot_table(index="query",columns="provider",values="response_time_ms",aggfunc="median")

print("\nPROVIDER SUMMARY\n")
print(summary.round(2).to_string())
print("\nQUERY MEDIAN LATENCY (ms)\n")
print(query_medians.round(2).to_string())
print("\nOVERLAP\n")
print(f"Mean common organic URLs: {overlap.common_urls.mean():.2f}")
print(f"Mean Jaccard similarity: {overlap.jaccard_pct.mean():.2f}%")
