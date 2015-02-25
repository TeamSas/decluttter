from django.conf.urls import patterns, url
from views import ItemListAPIView, ItemDetailAPIView, ItemCreateAPIView, ItemGenericListAPIView, ItemGenericRetrieveUpdateAPIView, ItemListCreateAPIView, \
    ClaimItemListCreateAPIView

urlpatterns = patterns('',
    url(r'^$', ItemListAPIView.as_view(), name='ItemListAPIView'),
    url(r'^item/(?P<item_id>\d+)/$', ItemDetailAPIView.as_view()),
    url(r'^create/$', ItemCreateAPIView.as_view()),
    url(r'^list/$', ItemGenericListAPIView.as_view()),
    url(r'^generics/id/(?P<id>\d+)/$', ItemGenericRetrieveUpdateAPIView.as_view(), name="item-generic-single"),
    url(r'^poster/(?P<poster>\d+)/$', ItemListCreateAPIView.as_view()),
    url(r'^claimer/(?P<claimer>\d+)/$', ClaimItemListCreateAPIView.as_view()),
)