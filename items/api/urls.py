from django.conf.urls import patterns, url
from views import ItemListAPIView, ItemDetailAPIView, ItemCreateAPIView, ItemGenericListAPIView, ItemGenericRetrieveUpdateAPIView, ItemListCreateAPIView, \
    ClaimItemListCreateAPIView, ClaimItemDetailAPIView, ClaimGenericRetrieveUpdateAPIView, ItemDetail2APIView, ItemUpdate

urlpatterns = patterns('',
    url(r'^$', ItemListAPIView.as_view(), name='ItemListAPIView'),
    url(r'^item/(?P<item_id>\d+)/$', ItemDetailAPIView.as_view()),
    url(r'^create/$', ItemCreateAPIView.as_view()),
    url(r'^list/$', ItemGenericListAPIView.as_view()),
    url(r'^generics/id/(?P<id>\d+)/$', ItemGenericRetrieveUpdateAPIView.as_view(), name="item-generic-single"),
    url(r'^poster/$', ItemListCreateAPIView.as_view()),
    url(r'^claimer/$', ClaimItemListCreateAPIView.as_view()),
    url(r'^claim/(?P<id>\d+)/$', ClaimItemDetailAPIView.as_view()),
    url(r'^mine/(?P<id>\d+)/$', ClaimGenericRetrieveUpdateAPIView.as_view()),
    url(r'^delete/(?P<id>\d+)/$', ItemDetail2APIView.as_view()),
    url(r'^update/(?P<item_id>\d+)/$', ItemUpdate.as_view())
)
