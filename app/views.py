from django.shortcuts import render


def index1(request):
    return render(request, 'app/learner1/index.html')

def test1(request):
    return render(request, 'app/learner1/test.html')


def index2(request):
    return render(request, 'app/learner2/index.html')

def test2(request):
    return render(request, 'app/learner2/test.html')

def index3(request):
    return render(request, 'app/learner3/index.html')

def test3(request):
    return render(request, 'app/learner3/test.html')