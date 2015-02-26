from rest_framework.response import Response
from rest_framework import status
from appuser.models import Stream, Follower
from rest_framework.generics import ListAPIView, CreateAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from appuser.serializers import StreamSerializer, FollowerSerializer
from django.contrib.auth.models import User


class StreamListCreateAPIView(ListCreateAPIView):
    serializer_class = StreamSerializer

    def get_queryset(self):
        user = self.request.user
        return Stream.objects.filter(user=user)

    def post(self, request, *args, **kwargs):
        serializer = StreamSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_200_OK)


class StreamRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = StreamSerializer

    def get(self, request, stream_id, format=None, *args, **kwargs):
        try:
            queryset = Stream.objects.get(pk=stream_id)
            serializer = StreamSerializer(queryset)

            return Response(serializer.data, status=status.HTTP_200_OK)

        except:
            return Response(status=status.HTTP_404_NOT_FOUND)


    def put(self, request, stream_id, format=None, *args, **kwargs):
        snippet = Stream.objects.get(pk=stream_id)
        serializer = StreamSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        else:
            return Response({"error": "This stream does not exist"}, status=status.HTTP_404_NOT_FOUND)

    def patch(self, request, stream_id, format=None, *args, **kwargs):
        snippet = Stream.objects.get(pk=stream_id)
        serializer = StreamSerializer(snippet, data=request.data)
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
    serializer_class = FollowerSerializer

    def post(self, request, *args, **kwargs):
        try:
            follower_id = User.objects.get(email=request.data['follower'])

        except:
           return Response({"error": "This user does not exist"}, status=status.HTTP_404_NOT_FOUND)

        try:
            if Follower.objects.get(followee=request.user.id, follower=follower_id.id):
                return Response({"error": "You are already friends"}, status=status.HTTP_404_NOT_FOUND)

        except:
            pass

        data = {
            'followee': request.user.id,
            'follower': follower_id.id
        }

        data_reverse = {
            'followee': follower_id.id,
            'follower': request.user.id
        }

        serializer = FollowerSerializer(data=data)
        serializer_reverse = FollowerSerializer(data=data_reverse)


        if serializer.is_valid() and serializer_reverse.is_valid():
            serializer.save()
            serializer_reverse.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        else:
            return Response({"error": "Please enter a valid email"}, status=status.HTTP_404_NOT_FOUND)


class FollowerListAPIView(ListAPIView):
    queryset = Follower.objects.all()
    serializer_class = FollowerSerializer


class FollowerRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = FollowerSerializer

    def get(self, request, followee_id, follower_id, format=None, *args, **kwargs):
        try:
            queryset = Follower.objects.get(followee=followee_id, follower=follower_id)
            serializer = FollowerSerializer(queryset)

            return Response(serializer.data, status=status.HTTP_200_OK)

        except:
            return Response(status=status.HTTP_404_NOT_FOUND)


    def put(self, request, followee_id, follower_id, format=None, *args, **kwargs):
        snippet = Follower.objects.get(followee=followee_id, follower=follower_id)
        serializer = FollowerSerializer(snippet, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        else:
            return Response({"error": "This stream does not exist"}, status=status.HTTP_404_NOT_FOUND)

    def patch(self, request, followee_id, follower_id, format=None, *args, **kwargs):
        snippet = Follower.objects.get(followee=followee_id, follower=follower_id)
        serializer = FollowerSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        else:
            return Response({"error": "This stream does not exist"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, followee_id, follower_id, *args, **kwargs):
        snippet = Follower.objects.get(followee=followee_id, follower=follower_id)
        snippet.delete()
        snippet_reverse = Follower.objects.get(followee=follower_id, follower=followee_id)
        snippet_reverse.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)