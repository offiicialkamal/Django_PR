from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
# Create your views here.

def home_page(request):
    print('incommig home page request detected')

    page_content = f"""
                        <h1> home page </h1>
                        <h2> now  time is {datetime.now()} </h2>
                        <p> this is hjonmw page and hear ill add the home page content </p>                        
                    """
    return HttpResponse(page_content)
