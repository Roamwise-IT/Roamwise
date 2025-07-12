import pandas as pd
import sqlite3

# === Step 1: Load CSV with Contact_Number as string ===
csv_file = "./malls/MallWinnieMandelaCresent - WinnieMandelaCresent.csv"  # <-- Update to match your actual file
df = pd.read_csv(csv_file, dtype={"Contact_Number": str})

# === Step 2: Define database ===
db_file = "mall_info.db"
conn = sqlite3.connect(db_file)
cursor = conn.cursor()

# === Step 3: Create table ===
cursor.execute("DROP TABLE IF EXISTS mall")  # Optional: Reset
cursor.execute("""
CREATE TABLE mall (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Store_Name TEXT,
    Category TEXT,
    Floor_Level INTEGER,
    Contact_Number TEXT,
    Opening_Hours TEXT,
    Closing_Hours TEXT
)
""")

# === Step 4: Insert data ===
df.to_sql("mall", conn, if_exists="append", index=False)

# === Step 5: Confirm and close ===
conn.commit()
print(f"Inserted {cursor.execute('SELECT COUNT(*) FROM mall').fetchone()[0]} rows into 'mall' table.")
conn.close()