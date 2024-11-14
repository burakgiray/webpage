---
header:
  caption: ""
  image: ""
layout: docs
---

<h1 style="text-align:center; padding: 15px; font-size: 2em; color: #2c3e50; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">
  UN Peacekeeping Activities and Public Services (UNPAPS)
</h1>

<hr style="border: 0; border-top: 1px solid #ccc; margin: 20px 0;" />

<p style='text-align: justify; font-size: 1em; color: #2c3e50;'>
  The UN Peacekeeping Activities and Public Services (UNPAPS) dataset addresses the lack of systematic data on UN peacekeepers' activities in conflict countries. By sourcing information from verified Twitter accounts of UN peacekeeping missions, UNPAPS provides valuable insights into the diverse range of tasks undertaken by peacekeepers, from administrative duties to security-related responsibilities. Researchers can utilize this dataset to study local support, conflict dynamics, and post-conflict peacebuilding, enhancing our understanding of the impact of peacekeeping efforts and the importance of community engagement for sustainable peace.
</p>

<h3 style="background-color:#102ec8;color:white; padding: 8px 12px; border-radius: 4px;">Data Collection and Classification Procedure</h3>

<p style='text-align: justify; font-size: 0.95em; color: #2c3e50;'>
  The data collection procedure involves using verified Twitter accounts of UN peacekeeping operations as reliable data sources. These accounts are acknowledged by the official webpage of UN Peacekeeping as trustworthy social media channels that highlight UN peacekeeping's work worldwide. Access to the tweets from these accounts is obtained through Twitter API v2, granted by Twitter's Academic Research Program.
</p>

<p style='text-align: justify;'>
  To ensure data accuracy, text similarity analysis is conducted between English tweets and translated non-English tweets using Jaccard and Cosine similarity metrics to identify and eliminate duplicated tweets. This process ensures the dataset provides a reliable representation of UN peacekeeping activities.
</p>

<p><strong>Unit of Analysis</strong>: country-province-day.</p>
<p><strong>Time Period</strong>: 28 July 2010 to 30 December 2022.</p>

<h3 style="background-color:#102ec8;color:white; padding: 8px 12px; border-radius: 4px;">Main Peacekeeping Activities</h3>

<div style="margin: 20px 0; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
  <iframe width="100%" height="750" style="border: none; border-radius: 8px;" src="https://burak-giray.shinyapps.io/monusco/"></iframe>
</div>

<p style='text-align: justify; font-size: 0.95em; color: #2c3e50;'>
  The UNPAPS dataset provides the ability to break down peacekeeping activities into specific categories. Below is a visualization of the various patrolling activities carried out by UN peacekeepers in the DRC, CAR, and Mali.
</p>

<h3 style="background-color:#102ec8;color:white; padding: 8px 12px; border-radius: 4px;">Types of Patrolling</h3>

<div style="margin: 20px 0; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
  <iframe width="100%" height="750" style="border: none; border-radius: 8px;" src="https://burak-giray.shinyapps.io/patrol/"></iframe>
</div>

<h3 style="background-color:#102ec8;color:white; padding: 8px 12px; border-radius: 4px;">Infrastructure-building Efforts</h3>

<div style="margin: 20px 0; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
  <iframe width="100%" height="750" style="border: none; border-radius: 8px;" src="https://burak-giray.shinyapps.io/infrastructure/"></iframe>
</div>

<p style='text-align: justify; font-size: 0.95em; color: #2c3e50;'>
  The dataset also includes information on the nationalities of peacekeepers involved in key activities. The visualization below highlights the most active countries in peacekeeping efforts since 2018.
</p>

<div style="margin: 20px 0; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
  <iframe width="100%" height="750" style="border: none; border-radius: 8px;" src="https://burak-giray.shinyapps.io/all_contributors/"></iframe>
</div>

<div class="alert alert-warning" role="alert" style="margin: 20px 0; padding: 10px; border-radius: 8px; background-color: #fff3cd; color: #856404;">
  <strong>Important:</strong> You can select "All" in the country dropdown to view all reported peacekeeping activities, even those without specific nationalities mentioned.
</div>

<h3 style="background-color:#102ec8;color:white; padding: 8px 12px; border-radius: 4px;">Things to Come</h3>

<p style='text-align: justify; font-size: 0.95em; color: #2c3e50;'>
  Currently, the focus is on expanding the dataset to include additional UN peacekeeping operations beyond MONUSCO in DRC, MINUSCA in CAR, and MINUSMA in Mali.
</p>

<h3 style="background-color:#102ec8;color:white; padding: 8px 12px; border-radius: 4px;">Acknowledgement</h3>

<p style='text-align: justify; font-size: 0.95em; color: #2c3e50;'>
  This project is supported by the PRIME programme of the German Academic Exchange Service (DAAD) with funds from the German Federal Ministry of Education and Research (BMBF).
</p>

<div style="text-align:center; padding: 10px;">
  <a href="https://twitter.com/Burak92Giray?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false" style="color: #1e6bb8; font-size: 0.9em;">
    Follow @Burak92Giray
  </a>
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
