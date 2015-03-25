from django.shortcuts               import render_to_response, render
from django.http  import HttpResponse, HttpResponseNotFound
#import Django-ExtJS-Mashup.settings
import Django_ExtJS_Mashup.settings
import simplejson as json

from polls.models import *
from polls.httpadapters import *

# Create your views here.
def root(request):
    print "root: ", Django_ExtJS_Mashup.settings.EXTJS_URL
    return render_to_response("polls/root.html", {'extjs' : Django_ExtJS_Mashup.settings.EXTJS_URL})

def pollChoices(request, *args):
    print 'pollChoices: ', args

    pid = int(args[0])
    poll = Poll.objects.get(id = pid)
    choices = [ChoiceHttpAdapter(c).jsonDict() for c in poll.choice_set.all()]
    return HttpResponse(json.dumps({"success" : "ok", "choices" : choices })
                      , content_type = 'application/json')
