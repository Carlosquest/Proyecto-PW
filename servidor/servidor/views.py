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
            # Inicia sesión o redirige a otra página aquí
            ...
    else:
        form = UserRegisterForm()
    return render(request, 'register.html', {'form': form})

def index(request):
    template_name="index.html"
    productos=productos.objects.filter(activo=True)
    context={"Productos":productos}
    return render(request, template_name, context)





   
