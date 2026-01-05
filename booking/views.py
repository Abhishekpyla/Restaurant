from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .models import dishes, Staff
from django.urls import reverse
from django.contrib import auth, messages



# Create your views here.

def index(request):
    return render(request, "index.html")

def menu(request):
    items = dishes.objects.all()
    return render(request, "menu.html", {'items':items})

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        
        user = auth.authenticate(username=username,password=password)
        
        if user is not None:
            auth.login(request, user)
            return redirect(reverse('index'))
        else:
            messages.info(request, 'invalid crenditials..')
            return redirect(reverse('login'))
    else:
        return render(request, "login.html")

def signup(request):
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        username = request.POST['username']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        
        if password1==password2:
            if User.objects.filter(username=username).exists():
                messages.info(request, 'username already taken...')
                return redirect(reverse('signup'))
            elif User.objects.filter(email=email).exists():
                messages.info(request, 'email already used...')
                return redirect(reverse('signup'))
            else:
                user = User.objects.create_user(username=username, password=password1, email=email, first_name=first_name, last_name=last_name)
                user.save()
                messages.success(request, 'user created...')
        else:
            messages.error(request, 'password not matching......')
            return redirect(reverse('signup'))
        return redirect(reverse('login'))
    else:
        return render(request, "signup.html")

def feedback(request):
    return render(request, "feedback.html")

def staff_login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username,password=password)
        if user:
            try:
                staff_profile = Staff.objects.get(user=user)
                auth.login(request, user)
                return render(request, "staffprofile.html", {"profile": staff_profile})
            except Staff.DoesNotExist:
                messages.error(request, "Not authorized as staff.")
                return redirect(reverse('login'))
        else:
            messages.info(request, 'invalid crenditials..')
            return redirect(reverse('login'))
    else:
        return render(request, "login.html")

def logout(request):
    auth.logout(request)
    return redirect(reverse('index'))


