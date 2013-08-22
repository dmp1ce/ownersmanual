{-# LANGUAGE OverloadedStrings #-}

-- Scotty specific
import Web.Scotty (scotty, get, html, file, header, middleware, notFound)
import Network.Wai.Middleware.Static (staticPolicy, noDots, (>->), addBase)

main :: IO()
main = scotty 80 $ do
  middleware $ staticPolicy (noDots >-> addBase "static")
  get "/" $ do
    header "Content-Type" "text/html"
    file "static/index.html"
  notFound $ html "Did not find resource."
