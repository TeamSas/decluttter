from rest_framework import serializers
from django.contrib.auth.models import User
from items.models import Item


class UserSerialize(serializers.ModelSerializer):

    class Meta:
        model = User


class ItemSerializer(serializers.ModelSerializer):
    poster = UserSerialize(read_only=True)
    claimer = UserSerialize(read_only=True)

    class Meta:
        model = Item
        fields = ("id", "poster", "claimer", "item_name", "description", "created", "image", "availability", "category")

class SecondItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item

