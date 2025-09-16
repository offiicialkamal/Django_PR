from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
# from django.shortcuts import render

# Create your views here.

# def home_page(request):
#     print('incommig home page request detected')

#     page_content = f"""
#                         <h1> home page </h1>
#                         <h2> now  time is {datetime.now()} </h2>
#                         <p> this is hjonmw page and hear ill add the home page content </p>
#                     """
#     return HttpResponse(page_content)

## USE THE RENDER TECHNIQUE ITS NOT AN OFFIIICIAL WAYT TO SHOW PAGES


def home_page(request):
    print("r̥endeering the home page content")
    return render(request, "home_page/index.html")
