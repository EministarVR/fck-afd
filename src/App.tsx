import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Facts from "./pages/Facts";
import Statistics from "./pages/Statistics";
import Sources from "./pages/Sources";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import Arguments from "./pages/Arguments";
import Actions from "./pages/Actions";
import Glossary from "./pages/Glossary";
import Comparison from "./pages/Comparison";
import Myths from "./pages/Myths";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/arguments" element={<Arguments />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/myths" element={<Myths />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
