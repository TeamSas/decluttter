from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Stream(models.Model):
    item = models.TextField(max_length=120)
    created = models.DateField(auto_now_add=True)
    status = models.BooleanField(default=True)
    deleted_status = models.BooleanField(default=False)
    user = models.ForeignKey(User)

    def __unicode__(self):
        return u"This item:{} is owned by {}".format(self.item, self.user)


class Follower(models.Model):
    followee = models.IntegerField()
    follower = models.IntegerField()

    def __unicode__(self):
        return u"Followee: {}, Follower: {}".format(self.followee, self.follower)
