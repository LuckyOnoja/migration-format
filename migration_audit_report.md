Database Schema Migration Audit Report

1. Executive Summary
- Target Database : 'db.sqlite'
- Migration Scope : Splitting legacy 'full_name' column into 'first_name' and 'last_name' without data loss.

2. Pre & Post Migration verification Results : 

┌─────────┬────┬────────────┬────────────┬───────────────────────┐
│ (index) │ id │ first_name │ last_name  │ email                 │
├─────────┼────┼────────────┼────────────┼───────────────────────┤
│ 0       │ 1  │ 'Alice'    │ 'Smith'    │ 'alice@example.com'   │
│ 1       │ 2  │ 'Bob'      │ 'Jones'    │ 'bob@example.com'     │
│ 2       │ 3  │ 'Charlie'  │ ''         │ 'charlie@example.com' │
│ 3       │ 4  │ 'Diana'    │ 'Prince'   │ 'diana@example.com'   │
│ 4       │ 5  │ 'Peer'     │ 'Mc Hogan' │ 'peer@mail.com'       │
└─────────┴────┴────────────┴────────────┴───────────────────────┘

3. QC Verificatio Metrics
- Total Records processed : 5
- Unmapped / NULL Names : 0
- Connection lifecyle : clean single closure post-serialization
- Recommendation: Approved for production deployment.