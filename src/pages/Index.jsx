import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">UFO Sightings and Encounters</h1>
          <p className="mt-4 text-xl">Explore the mysteries of the universe</p>
          <Button className="mt-8">Report a Sighting</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold">About Us</h2>
          <Separator className="my-4" />
          <p className="max-w-2xl">
            Our mission is to collect and share information about UFO sightings and encounters from around the world. We aim to provide a platform for individuals to report their experiences and explore the mysteries of the universe.
          </p>
          <img src="/placeholder.svg" alt="UFO Illustration" className="mt-8 w-1/2" />
        </div>
      </section>

      {/* Recent Sightings Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Recent Sightings</h2>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((sighting) => (
            <Card key={sighting}>
              <CardHeader>
                <CardTitle>Sighting {sighting}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/placeholder.svg" alt={`Sighting ${sighting}`} className="w-full h-48 object-cover" />
                <p className="mt-2">Brief description of the sighting.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <Separator className="my-4" />
        <div className="space-y-4">
          {[1, 2, 3].map((testimonial) => (
            <div key={testimonial} className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>UFO</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Person {testimonial}</p>
                <p>"This is a testimonial from someone who reported a sighting."</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center space-y-4">
          <div className="space-x-4">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Instagram</a>
          </div>
          <div>Contact us at: info@ufosightings.com</div>
          <div className="text-sm">Disclaimer: The authenticity of the reports is not verified.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;