<h1>Meteor Scrape</h1>

<h2>objectives</h2>
The ultimate goal is to scrape data from a property website into MongoDB, which will let the user perform a search by outcode area (first part of the postcode). Everytime a new scrape is made, the app will check for any new data and add only this to the database.

<h3>TDD with:</h3>

- <a href="http://velocity.meteor.com/">Velocity</a> (velocity:html-reporter 0.7.3)

- <a href="https://atmospherejs.com/sanjo/jasmine">Jasmine 2.1</a> (sanjo:jasmine 0.15.1)

to start Meteor (and MongoDB):
~~~
  ... $ meteor run
~~~

to start Meteor without the test runnner:
~~~
  ... $ VELOCITY=0 meteor run
~~~