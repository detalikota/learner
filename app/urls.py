from django.urls import path
from .views import index1, test1, index2, test2, index3, test3
app_name = 'app'
urlpatterns = [
    path('learner1', index1, name='learner1-index'),
    path('learner1/test', test1, name='learner1-test'),
    path('learner2', index2, name='learner2-index'),
    path('learner2/test', test2, name='learner2-test'),
    path('learner3', index3, name='learner3-index'),
    path('learner3/test', test3, name='learner3-test'),
]