from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
from appuser.models import Stream, Follower
from rest_framework.generics import ListAPIView, CreateAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from appuser.serializers import StreamSerializer, FollowerSerializer
import pdb


class StreamListCreateAPIView(ListCreateAPIView):
    queryset = Stream.objects.all()
    serializer_class = StreamSerializer


class StreamRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = StreamSerializer

    def get(self, request, stream_id, format=None, *args, **kwargs):
        try:
            queryset = Stream.objects.get(pk=stream_id)
            serializer = StreamSerializer(queryset)

            return Response(serializer.data, status=status.HTTP_200_OK)

        except Stream.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


    def put(self, request, stream_id, format=None, *args, **kwargs):
        snippet = Stream.objects.get(pk=stream_id)
        serializer = StreamSerializer(snippet, data=request.data)
        # pdb.set_trace()
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        else:
            return Response({"error": "This stream does not exist"}, status=status.HTTP_404_NOT_FOUND)

    def patch(self, request, stream_id, format=None, *args, **kwargs):
        snippet = Stream.objects.get(pk=stream_id)
        serializer = StreamSerializer(snippet, data=request.data)
        # pdb.set_trace()
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        else:
            return Response({"error": "This stream does not exist"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, stream_id, *args, **kwargs):
        snippet = Stream.objects.get(pk=stream_id)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Follower Table Create, Retrieve, Update and Destroy methods below
class FollowerCreateAPIView(CreateAPIView):
    queryset = Follower.objects.all()
    serializer_class = FollowerSerializer

class FollowerListAPIView(ListAPIView):
    queryset = Follower.objects.all()
    serializer_class = FollowerSerializer


class FollowerRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = FollowerSerializer

    def get(self, request, followee_id, format=None, *args, **kwargs):
        try:
            queryset = Follower.objects.get(followee=followee_id)
            serializer = FollowerSerializer(queryset)

            return Response(serializer.data, status=status.HTTP_200_OK)

        except Follower.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


    def put(self, request, followee_id, format=None, *args, **kwargs):
        snippet = Follower.objects.get(followee=followee_id)
        serializer = FollowerSerializer(snippet, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        else:
            return Response({"error": "This stream does not exist"}, status=status.HTTP_404_NOT_FOUND)

    def patch(self, request, followee_id, format=None, *args, **kwargs):
        snippet = Follower.objects.get(followee=followee_id)
        serializer = FollowerSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        else:
            return Response({"error": "This stream does not exist"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, followee_id, *args, **kwargs):
        snippet = Follower.objects.get(followee=followee_id)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)