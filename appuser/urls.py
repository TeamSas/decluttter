from django.conf.urls import patterns, url
from appuser.views import StreamListCreateAPIView, StreamRetrieveUpdateDestroyAPIView, FollowerCreateAPIView, \
    FollowerRetrieveUpdateDestroyAPIView, FollowerListAPIView

urlpatterns = patterns('',
    url(r'^list/$', StreamListCreateAPIView.as_view()),
    url(r'^update/(?P<stream_id>\w+)$', StreamRetrieveUpdateDestroyAPIView.as_view()),
    url(r'^create/follower/$', FollowerCreateAPIView.as_view()),
    url(r'list/follower/$', FollowerListAPIView.as_view()),
    url(r'^update/follower/(?P<followee_id>.+)/$', FollowerRetrieveUpdateDestroyAPIView.as_view())
)

__author__ = 'andy'
