from rest_framework import serializers
from appuser.models import Stream, Follower

class StreamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stream
        fields = ("id", "item", "created", "status", "deleted_status", "user")


class FollowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follower
        # depth = 1

__author__ = 'andy'
