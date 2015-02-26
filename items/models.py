from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Item(models.Model):

    class Meta:
        verbose_name = "Item"
        verbose_name_plural = "Items"

    CATEGORIES = (
        ('BOOKS', 'Books'),
        ('ENTERTAINMENT', 'Movies, Music, and Games'),
        ('ELECTRONICS', 'Electronics and Computers'),
        ('HOME', 'Home'),
        ('GARDEN', 'Garden and Tools'),
        ('BEAUTY', 'Beauty and Health'),
        ('TOYS', 'Toys, Kids and Baby'),
        ('CLOTHING', 'Clothing, Shoes and Jewelry'),
        ('SPORTS', 'Sports and Outdoors'),
        ('AUTOMOTIVE', 'Automotive'),
    )

    poster = models.ForeignKey(User, related_name="posted_items")
    claimer = models.ForeignKey(User, null=True, blank=True, related_name="claimed_items")
    item_name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    created = models.DateField(auto_now_add=True)
    image = models.CharField(null=True, blank=True, max_length=100)
    availability = models.BooleanField(default=True)
    category = models.CharField(max_length=50, choices=CATEGORIES)

    def __unicode__(self):
        return "{} on {}".format(self.item_name, self.created)

