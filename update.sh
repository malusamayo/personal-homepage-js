#!/bin/bash

msg=$1

# Build the project
npm run build

# Clone the repo to a temp location
rm -rf personal-homepage
git clone git@github.com:malusamayo/personal-homepage.git personal-homepage

# Copy build files into the cloned repo
cp -r build/* personal-homepage/

# Navigate and push
cd personal-homepage
git add .
git commit -m "Deploy: $msg"
git push origin main
cd ..

# Cleanup
rm -rf personal-homepage

# Push javascript project updates to remote server
git add .
git commit -m "Update: $msg"
git push origin main

# Pull the latest changes on remote server
ssh cyang3@linux.gp.cs.cmu.edu "cd www && git pull"

echo "Deployment complete!"
