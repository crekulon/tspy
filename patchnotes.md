---
layout: inner
title: "Patch Notes"
---
<section id="patchnotes" class="infosection">
    <div class="width-container patch-container">
        {% include patchnav.html %}

		{% assign sortednotes = site.patchnotes | sort: 'date' | reverse %}
        {% for notes in sortednotes %}
			{% include patchbox.html %}
        {% endfor %}

    </div>
</section>