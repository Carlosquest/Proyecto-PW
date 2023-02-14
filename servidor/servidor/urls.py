
from django.contrib import admin
from django.urls import path, include
from .import views

urlpatterns = [
    path('accounts/', include('django.contrib.auth.urls')),
    path('admin/', admin.site.urls),
    path('register/', views.register, name='register'  ),
    path('productos/', include('products.urls') ),
    path('carrito/', include('cart.urls') ),
    path('orders/', include('orders.urls') ),

    


]
