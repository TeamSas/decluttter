from django.conf.urls import patterns, url
from django.contrib import admin
import appuser.urls as user_urls
from authentication.views import Facebooklogin, Login, Logout, PasswordChange, UserDetails
from register.views import Register
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'declutter.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^facebook/$', Facebooklogin.as_view(), name='fb_login'),
    url(r'^login/$', Login.as_view(), name='login'),
    url(r'^logout/$', Logout.as_view(), name='logout'),
    url(r'^register/$', Register.as_view(), name='register')
)



__author__ = 'andy'
