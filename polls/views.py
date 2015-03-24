from django.shortcuts               import render_to_response, render
from django.http  import HttpResponse, HttpResponseNotFound
#import Django-ExtJS-Mashup.settings
import Django_ExtJS_Mashup.settings
# Create your views here.
def root(request):
    print "root: ", Django_ExtJS_Mashup.settings.EXTJS_URL
    return render_to_response("polls/root.html", {'extjs' : Django_ExtJS_Mashup.settings.EXTJS_URL})
