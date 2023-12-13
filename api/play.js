import React from 'react'

function play() {
  return (
    <div>
    <form>
<div class="flex flex-col space-y-4">
  <label for="email" class="text-sm font-medium">Email</label>
  <input id="email" type="email" class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />

  <label for="password" class="text-sm font-medium">Password</label>
  <input id="password" type="password" class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
</div>
    </form>
    </div>
  )
}

export default play