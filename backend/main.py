from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from groq import Groq
from dotenv import load_dotenv

import os

# Load environment variables
load_dotenv()
print("GROQ_API_KEY loaded:", bool(os.getenv("GROQ_API_KEY")))

# Create Groq client
client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

app = FastAPI()

# Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load resume dynamically
with open("data/resume.txt", "r", encoding="utf-8") as file:
    resume_context = file.read()


@app.get("/")
def home():
    return {
        "message": "AI Resume Chatbot Backend Running"
    }


@app.get("/chat")
def chat(prompt: str):

    system_prompt = f"""
    You are Golden Keshri's AI portfolio assistant.

    Your role is to professionally answer recruiter and visitor questions about:
    - skills
    - projects
    - work experience
    - tools
    - analytics expertise
    - career background

    IMPORTANT RULES:
    - Speak naturally and professionally.
    - Never say:
      - "According to the resume"
      - "Based on the resume"
      - "The resume says"
    - Keep responses concise and conversational.
    - Do not invent fake information.

    Resume Information:
    {resume_context}
    """

    try:
        completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "system",
                    "content": system_prompt,
                },
                {
                    "role": "user",
                    "content": prompt,
                },
            ],
            temperature=0.7,
            max_tokens=500,
        )
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"AI request failed: {exc}")

    response = completion.choices[0].message.content if completion.choices else None

    if not response:
        raise HTTPException(status_code=500, detail="AI returned no response.")

    return {
        "response": response
    }