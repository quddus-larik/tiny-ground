from fastapi import FastAPI
import judge0
from dotenv import load_dotenv
import os

load_dotenv()
app = FastAPI()

URL = os.getenv("SITE_URL")


@app.get("/")
def root():
    executed = judge0.run(source_code="print('hello Tiny!')")
    return { "message": "Backend Connected!", "code": executed, "url": URL }
