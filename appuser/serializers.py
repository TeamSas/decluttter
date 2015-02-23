from rest_framework import serializers
from appuser.models import Stream, Follower

class StreamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stream


class FollowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follower

__author__ = 'andy'
