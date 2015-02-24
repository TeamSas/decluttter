from rest_framework import serializers
from items.models import Item


class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = ("id", "poster_id", "claimer_id", "item_name", "description", "created", "image", "availability", "category")

