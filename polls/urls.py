#from django.conf.urls.defaults import patterns, include, url
from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

from polls.views     import *
from polls.resources import *

pollResource = PollResource()
choiceResource = ChoiceResource()
print pollResource

urlpatterns = patterns('',
    (r'^static/(?P<path>.*)$', 'django.views.static.serve'
    , {'document_root': Django_ExtJS_Mashup.settings.STATIC_POLLS}),
    url(r'^$',                       root),
    url(r'^polls/([^/]+)$',          pollResource.requestHandler), 
    url(r'^polls$',                  pollResource.requestHandler),
    url(r'^choices/([^/]+)$',        choiceResource.requestHandler), 
    url(r'^choices$',                choiceResource.requestHandler),
    url(r'^polls/([^/]+)/choices$',  pollChoices), 
    # Examples:
    # url(r'^$', 'mysite.views.home', name='home'),
    # url(r'^mysite/', include('mysite.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
