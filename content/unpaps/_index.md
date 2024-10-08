---
header:
  caption: ""
  image: ""
layout: docs
---


<h1 style="text-align:center; padding: 10px; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);">UN Peacekeeping Activities and Public Services (UNPAPS)</h1>
<hr />
 


<p style='text-align: justify;'>The UN Peacekeeping Activities and Public Services (UNPAPS) dataset addresses the lack of systematic data on UN peacekeepers' activities in conflict countries. By sourcing information from verified Twitter accounts of UN peacekeeping missions, UNPAPS provides valuable insights into the diverse range of tasks undertaken by peacekeepers, from administrative duties to security-related responsibilities. Researchers can utilize this dataset to study local support, conflict dynamics, and post-conflict peacebuilding, enhancing our understanding of the impact of peacekeeping efforts and the importance of community engagement for sustainable peace.</p>

<h3 style="background-color:#102ec8;color:white">Data Collection and Classification Procedure</h3>  

<p style='text-align: justify;'>The data collection procedure involves using verified Twitter accounts of UN peacekeeping operations as reliable data sources. These accounts are acknowledged by the official webpage of UN Peacekeeping as trustworthy social media channels that highlight UN peacekeeping's work worldwide. Access to the tweets from these accounts is obtained through Twitter API v2, granted by Twitter's Academic Research Program.</p>

<p style='text-align: justify;'>To ensure data accuracy, the process includes addressing two complications. The first one is data duplication due to bilingual tweeting behavior, where Twitter accounts post tweets in multiple languages. The second complication is data duplication resulting from identical tweeting behavior of multiple Twitter accounts.To tackle these issues, text similarity analysis is conducted between English tweets and translated non-English tweets. By measuring lexical and semantic similarities using Jaccard and Cosine similarity metrics, duplicated tweets are identified and eliminated. This process ensures the dataset provides a reliable representation of UN peacekeeping activities.</p>

<p style='text-align: justify;'>The classification of peacekeeping activities is carried out using a dictionary-based method, where a predetermined list of keywords is used to code the data. After coding the variables, the output is carefully tested and verified manually to eliminate any remaining duplication. The resulting dataset provides valuable insights into UN peacekeeping activities, excluding irrelevant tweets unrelated to peacekeeping efforts.</p>

<p><u>Unit of Analysis</u>: country-province-day.</p>
<p><u>Time Period</u>: The dataset covers the period from 28 July 2010 to 30 December 2022.</p>

<p style='text-align: justify;'>Below, I present the main peacekeeping activities carried out in the Democratic Republic of Congo (DRC), Central African Republic (CAR), and Mali across their provinces.</p>

<h3 style="background-color:#102ec8;color:white">Main Peacekeeping Activities</h3>  

<iframe width="100%" height="750" src="https://burak-giray.shinyapps.io/monusco/"></iframe>

<p style='text-align: justify;'>The UNPAPS dataset provides the ability to break down peacekeeping activities into specific categories. For instance, it allows for a detailed examination of the various types of patrolling involved in security-related tasks. The figure presented below showcases the diverse forms of patrolling activities carried out by UN peacekeepers in the DRC, CAR, and Mali. </p>

<h3 style="background-color:#102ec8;color:white">Types of Patrolling</h3>   

<iframe width="100%" height="750" src="https://burak-giray.shinyapps.io/patrol/"></iframe>

<p style='text-align: justify;'>

Using the UNPAPS dataset, it is also possible to track the daily infrastructure-building efforts of UN peacekeepers. As seen in the figure, the infrastructure built in host countries includes a wide range of projects, such as the construction of bridges, roads, hospitals, and even sports facilities, primarily for the youth. Additionally, investments are made in human capital through vocational training and the development of new skills.</p>

<h3 style="background-color:#102ec8;color:white">Infrastructure-building Efforts </h3>   

<iframe width="100%" height="750" src="https://burak-giray.shinyapps.io/infrastructure/"></iframe>

<p style='text-align: justify;'>Additionally, UNPAPS includes data on the nationalities of peacekeepers involved in important peacekeeping activities. As depicted in the figure below, there has been a noticeable increase in reporting the nationalities of peacekeepers since 2018. Starting from that year, countries such as Pakistan, Nepal, Bangladesh, India, and Indonesia have shown the highest levels of engagement. By utilizing this dataset, researchers can analyze the consistent involvement of specific peacekeeping forces (of MONUSCO, MINUSCA, and MINUSMA) in various peacekeeping tasks.</p>


<iframe width="100%" height="750" src="https://burak-giray.shinyapps.io/all_contributors/"></iframe>

<div class="alert alert-warning" role="alert">
  <strong>Important:</strong> Please note that you can select "All" in the country dropdown to view all reported peacekeeping activities, even those without specific nationalities of peacekeepers mentioned.
</div>

<h3 style="background-color:#102ec8;color:white">Things to Come</h3>   

<p style='text-align: justify;'>At present, my focus involves expanding the dataset to encompass additional current UN peacekeeping operations. The data presented above is limited to the coverage of MONUSCO in the DRC, MINUSCA in CAR, and MINUSMA in Mali.</p>
 
<h3 style="background-color:#102ec8;color:white">Acknowledgement</h3>  

<p style='text-align: justify;'>The project is supported by the PRIME programme of the German Academic Exchange Service (DAAD) with funds from the German Federal Ministry of Education and Research (BMBF).</p>

<a href="https://twitter.com/Burak92Giray?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @Burak92Giray</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

