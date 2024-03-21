# English-to-German-translation-transformer

![info](./github-readme-assets/info.png)

---

### DockerCompose (development)

```bash
# up the containers
docker compose -f docker-compose-dev.yaml up

# down the containers and remove images
docker compose -f docker-compose-dev.yaml down --rmi local
```

---

### DockerCompose (production)

```bash
# up the containers
docker compose -f docker-compose-prod.yaml up

# down the containers and remove images
docker compose -f docker-compose-prod.yaml down --rmi local
```

---

## Train & Val loss curve

![train and val loss curve](./github-readme-assets/train_and_val_loss_curve.png)

---

## Number of parameters in the network 😎

![number of parameters](./github-readme-assets/number_of_parameters.png)

- 37 million+ parameters 🤙🏻👨🏻‍🌾