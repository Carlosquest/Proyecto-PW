from django.db import models


# Category Model
class Category(models.Model):
    name = models.CharField(max_length=300)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'categories'
        verbose_name = 'Categoría'
        verbose_name_plural = 'Categorías'
        ordering = ['-id']


# Product Model
class Product(models.Model):
    name = models.CharField(max_length=300)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image = models.URLField(max_length=200, default='https://example.com/default.jpg')
    price = models.FloatField()
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'products'
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'
        ordering = ['id']
