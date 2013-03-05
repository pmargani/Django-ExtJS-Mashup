from django.conf.urls.defaults import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

#from polls.views     import *
#from polls.resources import *

#pollResource = PollResource()
#print pollResource

urlpatterns = patterns('',
    (r'polls/',  include('mysite.polls.urls')), 
    #(r'^static/(?P<path>.*)$', 'django.views.static.serve'
    #, {'document_root': settings.STATIC_POLLS}),
    #url(r'^$',                       root),
    #url(r'^polls/([^/]+)$',          pollResource.requestHandler), 
    #url(r'^polls$',                  pollResource.requestHandler),
    # Examples:
    # url(r'^$', 'mysite.views.home', name='home'),
    # url(r'^mysite/', include('mysite.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
