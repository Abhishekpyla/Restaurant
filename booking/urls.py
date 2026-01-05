from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('menu/', views.menu, name='menu'),
    path('feedback/', views.feedback, name='feedback'),
    path('login/', views.login, name='login'),
    path('signup/', views.signup, name='signup'),
    path('staff_login/', views.staff_login, name='staff_login'),
    path('logout/', views.logout, name='logout'),
]
