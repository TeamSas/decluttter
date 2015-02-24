from django.conf.urls import patterns, include, url
from django.contrib import admin
import appuser.urls as user_urls
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'declutter.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^api/appuser/', include(user_urls)),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/items/', include('items.api.urls')),
)
