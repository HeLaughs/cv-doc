import React from 'react';
import './App.css';
import user from './assets/user.png'; // Ensure the image is imported

function App() {
  

  return (
    <div className="bg-white text-gray-900 font-sans">
  <div class="max-w-3xl mx-auto px-6 py-12">
    <div class="flex items-center gap-6">
      <img src={user} alt="user" class="w-20 h-20 rounded-full border object-cover" />
      <div>
        <h1 class="text-3xl font-medium">Sara Lawrence</h1>
        <p class="text-sm text-gray-900">Design in Kenya</p>
        <p class="text-sm text-gray-900">website.com</p>
      </div>
    </div>

    <section class="mt-10">
      <h2 class="text-xl font-medium text-gray-900 mb-4">About</h2>
      <p>I’m a passionate UX designer striving to create intuitive and engaging experiences. I’m a big believer that things can always be simpler than we think.</p>
    </section>

    <section class="mt-10">
      <h2 class="text-xl font-medium text-gray-900 mb-4">Work Experience</h2>
      <div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2017 — Now</div>
          <div>
            <h3 class="font-medium">Senior Designer at Magic Design Co</h3>
            <p class="text-sm text-gray-600">San Francisco, CA</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2015 — 2017</div>
          <div>
            <h3 class="font-medium">Junior Designer at Creative Co</h3>
            <p class="text-sm text-gray-600">Atlanta, GA</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2014 — 2015</div>
          <div>
            <h3 class="font-medium">Intern at Design Hub</h3>
            <p class="text-sm text-gray-600">Atlanta, GA</p>
          </div>
        </div>
        <div class="flex gap-4 mt-2">
              <img src="https://via.placeholder.com/100x60" alt="Robot image 1" class="w-24 h-14 object-cover rounded border" />
              <img src="https://via.placeholder.com/100x60" alt="Robot image 2" class="w-24 h-14 object-cover rounded border" />
              <img src="https://via.placeholder.com/100x60" alt="Robot image 2" class="w-24 h-14 object-cover rounded border" />
            </div>
            <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2014 — 2015</div>
          <div>
            <h3 class="font-medium">Intern at Design Hub</h3>
            <p class="text-sm text-gray-600">Atlanta, GA</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2012 — 2014</div>
          <div>
            <h3 class="font-medium">Freelance Graphic Designer</h3>
            <p class="text-sm text-gray-600">Remote</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2010 — 2012</div>
          <div>
            <h3 class="font-medium">
Art Assistant at Studio X</h3>
            <p class="text-sm text-gray-600">Cincinnati, OH</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2008 — 2010</div>
          <div>
            <h3 class="font-medium">
Volunteer Designer at Nonprofit Y</h3>
            <p class="text-sm text-gray-600">Cincinnati, OH</p>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-8">
    <h2 class="text-xl font-medium text-gray-900 mb-4">Writing</h2>
      <div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2023</div>
          <div>
            <h3 class="font-medium">
Exploring the Intersection of Design and Technology</h3>
            <p class="text-sm text-gray-600">Collaboration with Mia, Leo, and Ava</p>
            <div class="flex gap-2 mt-2">
              <img src="https://via.placeholder.com/100x60" alt="Robot image 1" class="w-24 h-14 object-cover rounded border"/>
              <img src="https://via.placeholder.com/100x60" alt="Robot image 2" class="w-24 h-14 object-cover rounded border"/>
            </div>
          </div>
        </div>
        <div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2023</div>
          <div>
            <h3 class="font-medium">
Understanding Design Hierarchies
            </h3>
            <p>Worked alongside Alex</p>
</div>
</div>
</div>
<div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2020</div>
          <div>
            <h3 class="font-medium">The Art of User-Centered Design</h3>
</div>
</div>
</div>
<div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2019</div>
          <div>
            <h3 class="font-medium">
Navigating Design Challenges</h3>
</div>
</div>
</div>
<div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2018</div>
          <div>
            <h3 class="font-medium">
            Crafting Engaging User Experiences</h3>
</div>
</div>
</div>
<div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2018</div>
          <div>
            <h3 class="font-medium">Building a Cohesive Design Language</h3>
</div>
</div>
</div>
<div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2017</div>
          <div>
            <h3 class="font-medium">
            The Power of Visual Storytelling</h3>
</div>
</div>
</div>
      </div>
    </section>
    </div>
   </div>
  )
}

export default App;
