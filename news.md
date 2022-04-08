---
layout: inner
title: "News"
---
<section id="news" class="infosection">
    <div class="width-container blog-container">
        {% include newsnav.html %}

		{% assign sortednotes = site.news | sort: 'date' | reverse %}
        {% for notes in sortednotes %}
			{% include blogbox.html %}
        {% endfor %}

    </div>
</section>

