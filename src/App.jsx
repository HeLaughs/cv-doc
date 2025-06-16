import React from 'react';
import './App.css';
import user from './assets/user.png';
import sara from './assets/sara.jpg';

function App() {
  

  return (
    <body class=" bg-white text-gray-900 font-sans">
      <div class="container mx-auto px-4 py-8">
      <div class="bg-gray-100 mt-4 mb-4 rounded-4xl border-0 shadow">
  <div class="max-w-3xl mx-auto px-6 py-12">
    <div class="flex items-center gap-6">
      <img src={user} alt="user" class="w-20 h-20 rounded-full border object-cover" />
      <div>
        <h1 class="text-2xl font-medium">Sara Lawrence</h1>
        <p class="text-sm text-gray-900">Design in Kenya</p>
        <p class="text-sm text-gray-900">website.com</p>
      </div>
    </div>

    <section class="mt-10">
      <h2 class="font-bold text-gray-900 mb-4">About</h2>
      <p>I’m a passionate UX designer striving to create intuitive and engaging experiences. I’m a big believer that things can always be simpler than we think.</p>
    </section>

    <section class="mt-10">
      <h2 class="font-bold text-gray-900 mb-4">Work Experience</h2>
      <div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2017 — Now</div>
          <div>
            <a href="#" class="font-medium text-gray-900 hover:underline inline-flex">Senior Designer at Magic Design Co<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
            </a>
            <h1 class="text-sm text-gray-600">San Francisco, CA</h1>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2015 — 2017</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">Junior Designer at Creative Co<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
            <h1 class="text-sm text-gray-600">Atlanta, GA</h1>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2014 — 2015</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">Intern at Design Hub<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
            <h1 class="text-sm text-gray-600">Atlanta, GA</h1>
          </div>
        </div>
        <div class="flex gap-4 mt-4 px-4 py-2">
              <img src={sara} alt="Sara" class="w-32 h-20 object-cover rounded" />
              <img src={sara} alt="Sara" class="w-32 h-20 object-cover rounded" />
              <img src={sara} alt="Sara" class="w-32 h-20 object-cover rounded" />
            </div>
            <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2014 — 2015</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">Intern at Design Hub<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
            <h1 class="text-sm text-gray-600">Atlanta, GA</h1>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2012 — 2014</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">Freelance Graphic Designer<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
            <h1 class="text-sm text-gray-600">Remote</h1>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2010 — 2012</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">
Art Assistant at Studio X<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
            <h1 class="text-sm text-gray-600">Cincinnati, OH</h1>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2008 — 2010</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">
Volunteer Designer at Nonprofit Y<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
            <h1 class="text-sm text-gray-600">Cincinnati, OH</h1>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-8">
    <h2 class="font-bold text-gray-900 mb-4">Writing</h2>
      <div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2023</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">
Exploring the Intersection of Design and Technology<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
            <h1 class="text-sm text-gray-600">Collaboration with Mia, Leo, and Ava</h1>
            <div class="flex gap-2 mt-4">
              <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48" src={sara} alt="Sara" />
    <div class="flex flex-col justify-between p-4">
        <h1 class="mb-2 mt-4 text-sm text-gray-900">This is a site title that can go...</h1>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">1 min read</p>
    </div>
</a>

            </div>
          </div>
        </div>
        <div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2023</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">
Understanding Design Hierarchies
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
            <h2>Worked alongside Alex</h2>
</div>
</div>
</div>
<div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2020</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">The Art of User-Centered Design<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
</div>
</div>
</div>
<div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2019</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">
Navigating Design Challenges<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
</div>
</div>
</div>
<div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2018</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">
            Crafting Engaging User Experiences<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
</div>
</div>
</div>
<div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2018</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">Building a Cohesive Design Language<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
</div>
</div>
</div>
<div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2017</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">
            The Power of Visual Storytelling<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
</div>
</div>
</div>
      </div>
    </section>
    <section class="mt-8">
    <h2 class="font-bold text-gray-900 mb-4">Speaking</h2>
      <div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2024</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">
Designing for accessibility<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
            <h1 class="text-sm text-gray-600">Los Angeles, CA</h1>
          </div>
        </div>
        <div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2024</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">How to make things super simple
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
            <h1 class="text-sm text-gray-600">Miami, FL</h1>
</div>
</div>
</div>
<div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2023</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">
            Designing your career<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
</div>
</div>
</div>
      </div>
    </section>
    <section class="mt-8">
    <h2 class="font-bold text-gray-900 mb-4">Side Projects</h2>
      <div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2021</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">Nature walks<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
          </div>
        </div>
        <div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2020</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">
            Plant-based cookware
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
</div>
</div>
</div>
<div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2019</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">
            Interactive art installation<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
</div>
</div>
</div>
      </div>
    </section>
    <section class="mt-10">
      <h2 class="font-bold text-gray-900 mb-4">Education</h2>
      <div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2010 — 2010</div>
          <div>
            <a href="#" class="font-medium text-gray-900 hover:underline inline-flex">
            Master’s in Interaction Design at Georgia Tech<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
            </a>
            <h1 class="text-sm text-gray-600">Atlanta, GA</h1>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">2006 — 2010</div>
          <div>
            <a class="font-medium text-gray-900 hover:underline inline-flex">
            Bachelor’s in Communication Design at University of Cincinnati<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
            <h1 class="text-sm text-gray-600">Cincinnati, OH</h1>
          </div>
        </div>
       </div>
    </section>
    <section class="mt-10">
      <h2 class="font-bold text-gray-900 mb-4">Contract</h2>
      <div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">Threads</div>
          <div>
            <a href="#" class="text-sm text-gray-900 hover:underline inline-flex">
            username<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
            </a>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">Figma</div>
          <div>
            <a class="text-sm text-gray-900 hover:underline inline-flex">
            username<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">Instagram</div>
          <div>
            <a class="text-sm text-gray-900 hover:underline inline-flex">
            username<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">Bluesky</div>
          <div>
            <a class="text-sm text-gray-900 hover:underline inline-flex">
            username<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">Mastodon</div>
          <div>
            <a class="text-sm text-gray-900 hover:underline inline-flex">
            username<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-24 text-sm text-gray-600">X</div>
          <div>
            <a class="text-sm text-gray-900 hover:underline inline-flex">
            username<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></a>
          </div>
        </div>
       </div>
    </section>
    </div>
  </div>
  </div>
   </body>
  )
}

export default App;
