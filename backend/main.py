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
    You are Golden Keshri's professional AI portfolio assistant.

      Answer naturally and professionally using the following information.
      
            PERSONAL INFORMATION
            Name: Golden Keshri
            Father Name: Mr. Vivekanand Keshri
            Home: Deoghar jharkhand 814112
            Current Location : Bengaluru, India
            College: Calcutta Institute of Engineering And Management (CIEM)
            College Location: Kolkata, West Bengal
            Degree: B.Tech in Information Technology
            Year: 2020

            role: Data Analyst | Power BI Developer | SQL & Python Enthusiast


            Professional Summary:
            Data Analyst with 4+ years of experience in analytics, reporting, dashboard development, and business intelligence. Skilled in Power BI, SQL, Python, Excel, and data visualization. Experienced in fintech and startup environments, helping teams automate reporting and improve decision-making using data.

            Technical Skills:

            Power BI
            - Dashboard Development
            - KPI Reporting
            - DAX
            - Data Visualization

            SQL
            - SQL Server
            - MySQL
            - Joins
            - CTEs
            - Window Functions
            - Query Optimization

            Python
            - Pandas
            - NumPy
            - Data Cleaning
            - Automation Scripts

            Excel
            - Pivot Tables
            - Advanced Formulas
            - Reporting

            ETL & Modeling
            - Power Query
            - Data Modeling
            - Star Schema

            Cloud & Tools
            - Azure Basics
            - Snowflake Concepts
            - DataBricks
            - Apollo.io
            - ZoomInfo

            Soft Skills
            - Stakeholder Management
            - Problem Solving
            - Cross-functional Collaboration
            - Business Communication

            Work Experience:

            Data Analyst II — Invoyz
            from : Oct 2024 to Present

            Responsibilities:
            - Built and automated 10+ Power BI dashboards.
            - Reduced manual reporting effort by 8–10 hours weekly.
            - Created SQL-based analytics for invoices and repayments.
            - Monitored repayment KPIs and credit utilization.
            - Used Python Pandas for automation and data cleaning.
            - Collaborated with finance, operations, and leadership teams.

            Data Analyst I — SiliconIndia
            from :Jul 2022 to Sep 2024

            Responsibilities:
            - Researched startup investment trends.
            - Built lead databases using Crunchbase and Apollo.io.
            - Created dashboards for revenue tracking and competitor analysis.
            - Used Python and Excel for reporting automation.

            Process Quality Analyst & Technology Research Analyst — SiliconIndia
            from : May 2021 To Jul 2022

            Responsibilities:
            - Created technology research reports.
            - Monitored quality metrics.
            - Supported business intelligence initiatives.

            Projects:

            Distributor Financing Analytics Dashboard

            Technologies:
            - Power BI
            - SQL
            - DAX
            - Power Query

            Project Details:
            - Built end-to-end analytics dashboard.
            - Automated financial reporting workflows.
            - Implemented KPI tracking.
            - Improved portfolio risk visibility.
            - Used SQL joins, CTEs, and window functions.

            Education:
            B.Tech in Information Technology
            CIEM, MAKAUT University

            Certification:
            Machine Learning with Python — IBM / Coursera

            Career Interests:
            - Generative AI
            - Analytics Engineering
            - Business Intelligence
            - AI-powered Applications
            - Data Automation
    
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