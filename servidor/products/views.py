from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from cart.cart import Cart
from .models import Product, Category


# Create your views here.
@login_required(login_url='/autenticacion/acceder')
def listado_productos(request):
    category=Category.objects.all()
    p=[]
    for c in category:
        p.append([c,Product.objects.filter(category=c)])
    #products = Product.objects.filter(category=category)
    return render(request, "products/listado.html", {
        "products":p
    })

