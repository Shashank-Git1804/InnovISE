#!/usr/bin/env python3
from fpdf import FPDF
import os

def create_certificate(team_name, place, members, filename):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font('Arial', 'B', 24)
    
    # Title
    pdf.cell(0, 30, 'InnovISE - Certificate of Achievement', 0, 1, 'C')
    
    # Place
    pdf.set_font('Arial', 'B', 20)
    pdf.cell(0, 20, f'{place} Place Winner', 0, 1, 'C')
    
    # Team name
    pdf.set_font('Arial', 'B', 18)
    pdf.cell(0, 20, f'Team: {team_name}', 0, 1, 'C')
    
    # Members
    pdf.set_font('Arial', '', 14)
    pdf.cell(0, 15, 'Team Members:', 0, 1, 'C')
    for member in members:
        pdf.cell(0, 10, member, 0, 1, 'C')
    
    # Event
    pdf.ln(20)
    pdf.set_font('Arial', 'I', 12)
    pdf.cell(0, 10, 'AI/ML Competition 2025', 0, 1, 'C')
    pdf.cell(0, 10, 'Machine Learning Challenge', 0, 1, 'C')
    
    # Save
    pdf.output(filename)

# Create certificates directory
os.makedirs('public/certificates', exist_ok=True)

# Create certificates for winners
winners = [
    {
        'place': '1st',
        'team_name': 'Neural Ninjas',
        'members': ['Alex Johnson', 'Sarah Chen', 'Michael Rodriguez'],
        'filename': 'public/certificates/neural-ninjas-1st.pdf'
    },
    {
        'place': '2nd',
        'team_name': 'Data Wizards', 
        'members': ['Emily Davis', 'James Wilson', 'Lisa Zhang'],
        'filename': 'public/certificates/data-wizards-2nd.pdf'
    },
    {
        'place': '3rd',
        'team_name': 'Algorithm Aces',
        'members': ['David Kim', 'Rachel Green', 'Tom Brown'],
        'filename': 'public/certificates/algorithm-aces-3rd.pdf'
    }
]

for winner in winners:
    create_certificate(
        winner['team_name'],
        winner['place'],
        winner['members'],
        winner['filename']
    )
    print(f"Created certificate: {winner['filename']}")

print("All certificates created successfully!")

