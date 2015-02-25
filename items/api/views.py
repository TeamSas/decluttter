from rest_framework.views import APIView, Response
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateAPIView, ListCreateAPIView
from items.api.serializers import ItemSerializer
from items.models import Item


class ItemListAPIView(APIView):
    def get(self, request):
        queryset = Item.objects.all()

        serializer = ItemSerializer(queryset, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class ItemDetailAPIView(APIView):
    def get(self, request, item_id):
        item = Item.objects.get(pk=item_id)
        serializer = ItemSerializer(item)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, item_id):
        item = Item.objects.get(pk=item_id)
        if item:
            item.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, item_id, *args):
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():

            serializer.save(poster=request.user)
            return Response(serializer.data, status.HTTP_202_ACCEPTED)

        else:
            return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)


class ItemCreateAPIView(CreateAPIView):
    serializer_class = ItemSerializer

    def create(self, request, *args):
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():

            serializer.save(poster=request.user)
            return Response(serializer.data, status.HTTP_201_CREATED)

        else:
            return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)


class ItemGenericListAPIView(ListAPIView):
    model = Item
    serializer_class = ItemSerializer

    def get_queryset(self):
        return Item.objects.all()


class ItemGenericRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    model = Item
    serializer_class = ItemSerializer
    lookup_field = 'id'

    def get_queryset(self):
        return Item.objects.all()


class ItemListCreateAPIView(ListCreateAPIView):
   serializer_class = ItemSerializer

   def get_queryset(self):
       user = self.request.user
       return Item.objects.filter(poster=user)


class ClaimItemListCreateAPIView(ListCreateAPIView):
    serializer_class = ItemSerializer

    def get_queryset(self):
        user = self.request.user
        return Item.Objects.filter(claimer=user)