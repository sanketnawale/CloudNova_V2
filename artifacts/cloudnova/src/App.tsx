import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import BlogWelcomeToCloudNova from "@/pages/blog/welcome-to-cloudnova";
import BlogMonitoringLaunch from "@/pages/blog/blog-monitoring-launch";

import Home from "@/pages/home";
import Products from "@/pages/products";
import Services from "@/pages/services";
import Blogs from "@/pages/blogs";
import Company from "@/pages/company";
import Demo from "@/pages/demo";
import NotFound from "@/pages/not-found";
import BlogJclCat from "./pages/blog/blog-jcl-cat";
import BlogAvvisami from "./pages/blog/blog-avvisami";
import Careers from "./pages/careers";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Cookies from "./pages/cookies";
import Monitoring from "@/pages/monitoring";
import BlogZAgentLive from "@/pages/blog/blog-z-agent-live";
import BlogWelcomingFeryal from "@/pages/blog/blog-welcoming-feryal";
import BlogMiraLaunch from "@/pages/blog/blog-mira-launch";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="min-h-screen flex flex-col w-full selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/services" component={Services} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/company" component={Company} />
          <Route path="/demo" component={Demo} />
          <Route path="/blog/welcome-to-cloudnova" component={BlogWelcomeToCloudNova} />
          <Route path="/blog/jcl-cat" component={BlogJclCat} />
          <Route path="/careers" component={Careers} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/cookies" component={Cookies} />
          <Route path="/monitoring" component={Monitoring} />
          <Route path="/blog/monitoring-launch" component={BlogMonitoringLaunch} />
          <Route path="/blog/avvisami-multilingual-permit-updates" component={BlogAvvisami} />
          <Route path="/blog/z-agent-live" component={BlogZAgentLive} />
          <Route path="/blog/welcoming-feryal-akmoum" component={BlogWelcomingFeryal} />
          <Route path="/blog/mira-launch" component={BlogMiraLaunch} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
