from django.shortcuts import render

def home(request):
    return render(request, 'app/home.html')

def test(request):
    return render(request, 'app/test.html')
