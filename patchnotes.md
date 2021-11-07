---
layout: inner
title: "Patch Notes"
---
<section id="patchnotes" class="infosection">
    <h2 class="motto title">PATCH NOTES</h2>
    <div class="width-container patch-container">

		{% assign sortednotes = site.patchnotes | sort: 'date' %}
        {% for notes in sortednotes %}
			{% include patchbox.html %}
        {% endfor %}

    </div>
</section>