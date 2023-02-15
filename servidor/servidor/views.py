from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from.models import*
from .forms import UserRegisterForm

# Create your views here.

def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()

    else:
        form = UserRegisterForm()
    return render(request, 'register.html', {'form': form})

def index(request):
    Products=Products.objects.filter(activo=True)
    context={"Productos":Products}
    return render(request, 'products/listado.html',context)








   
